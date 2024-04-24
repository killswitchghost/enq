import React, { useEffect, useState } from 'react';
import './_BackTop.scss';

const BackTop = () => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;

      setShowButton(currentScroll / totalScroll > .95);
      setProgress(Math.round((currentScroll / totalScroll) * 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        id="back-top"
        className={`backTop ${showButton ? 'showUp' : ''}`}
        onClick={scrollToTop}
aria-label="Back to top"
      >
<i className="bi bi-chevron-up"></i>
      </button>
    </>
  );
};

export default BackTop;
