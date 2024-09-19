import React, { useEffect } from 'react';
// import GrowLine from '../../shared/GrowLine/GrowLine';
import styles from './_BgImageGrow.module.scss';

const BgImageGrow: React.FC = () => {
  const handleScroll = () => {
    const scaleDivs = document.querySelectorAll(`.${styles.widthScroll}`);

    scaleDivs.forEach((scaleDiv) => {
      const windowHeight = window.innerHeight;
      const divPosition = scaleDiv.getBoundingClientRect();
      const percentageVisible = (windowHeight - divPosition.top) / windowHeight;
      const newWidth = Math.min(percentageVisible * 100, 100);
      const opacityValue = Math.min(percentageVisible, 1);

      (scaleDiv as HTMLElement).style.width = `${newWidth}%`;
      (scaleDiv as HTMLElement).style.opacity = `${opacityValue}`;
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.stickyContainer}>
      <div className='flex items-center justify-center h-screen bg-blue-500'></div>
      <div className={styles.stickyBackground}>
        <div
          className={styles.widthScroll}
          style={{
            background: 'url(/img/laptop.jpg) no-repeat center center',
            backgroundSize: 'cover',
            height: '100%'
          }}
        ></div>
      </div>
      <div className={styles.textContent}>
        {/* <div
          className={`${styles.growDiv} grad-vert`}
          data-aos='grow-animation'
          data-aos-delay='10'
          data-aos-duration='1000'
        ></div> */}
        {/* <GrowLine className={`${styles.growDiv} all-colors-gradient`} /> */}
        <h1 className={styles.centerHeading}>We are Enqbator</h1>

        <p className='w-50'>
          Discover who we are and what drives us. Learn more about our mission,
          values, and the passionate team behind our success.
        </p>

        <a href='#' className='btn btn-primary'>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default BgImageGrow;
