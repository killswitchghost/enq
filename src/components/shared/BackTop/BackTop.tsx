import React, { useEffect, useState } from 'react';
import styles from './_BackTop.module.scss';

const BackTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setShowButton(currentScroll > 1080);
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
        className={`${styles.backTop} ${showButton ? styles.showUp : ''}`}
        onClick={scrollToTop}
        aria-label='Back to top'
      >
        <i className='bi bi-chevron-up'></i>
      </button>
    </>
  );
};

export default BackTop;
