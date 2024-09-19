// export default MyApp;
import React, { useEffect } from "react";
import Script from "next/script";
import Lenis from "@studio-freight/lenis"; // Import Lenis class
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "aos/dist/aos.css"; // AOS styles
import "../assets/scss/global.scss"; // Custom SCSS
// import '../assets/scss/style.scss'; // Custom SCSS
import AOS from "aos";
import Head from "next/head";
import { AppProps } from "next/app";
import useWindowSize from "@hooks/useWindowSize";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useWindowSize();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      initClassName: "aos-init",
      easing: "ease-out-quart",
      once: false,
      mirror: true,
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
      duration: 1.5, // Duration of the scroll animation
      easing: (t) => 1 - Math.pow(1 - t, 4), // Easing function for smooth scrolling
      smooth: true,
    }) as unknown as ExtendedLenis;
    // Request animation frame function for smooth scrolling
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();
        const targetSection = document.querySelector(
          target.getAttribute("href")!
        );
        if (targetSection) {
          const targetPosition =
            targetSection.getBoundingClientRect().top + window.scrollY;
          lenis.scrollTo(targetPosition, { behavior: "smooth" });
        }
      }
    };

    // Attach event listeners for smooth scrolling on in-page links
    document.addEventListener("click", handleAnchorClick);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        />
        <title>Page Title</title>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload" // Lazy loading for performance
      />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
