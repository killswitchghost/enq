import Image from 'next/image';
import styles from './_ScrollingLogos.module.scss';

const ScrollingLogos = () => {
  return (
    <section className={`${styles.scrollingLogosSection} mb-5`}>
      <div className='container-fluid px-0'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-4'>
            <p className='eyebrow'>Partners we call family</p>
          </div>
        </div>
        <div className='row'>
          <div className={styles.marquee}>
            <div className={styles.marqueeInner}>
              <span className={styles.marqueeSpan}>
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />

                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
              </span>
              <span className={styles.marqueeSpan}>
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
                <Image
                  src='/img/logos/crh.png'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} invert`}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingLogos;
