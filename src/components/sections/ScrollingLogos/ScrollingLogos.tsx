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
              <span className={`${styles.marqueeSpan} marquee-span`}>
                <Image
                  src='/img/logos/CRH-Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} logo`}
                />

                <Image
                  src='/img/logos/CapMetro-Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} logo`}
                />
                <Image
                  src='/img/logos/HSI-Forum-Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} logo`}
                />
                <Image
                  src='/img/logos/Sturgis-Bank-Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} logo`}
                />
                <Image
                  src='/img/logos/3rd-Circuit-Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} logo`}
                />
                <Image
                  src='/img/logos/MASB-Logo-hor.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} logo`}
                />
                <Image
                  src='/img/logos/36th-District-Court-Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} logo`}
                />
                <Image
                  src='/img/logos/36th-District-Court-Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} logo`}
                />
                <Image
                  src='/img/logos/Mortgage-Center-logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} logo`}
                />
              </span>
              {/* <Image
                  src='/img/logos/CRH_Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} `}
                />
                <Image
                  src='/img/logos/CRH_Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} `}
                />
              </span>
              <span className={styles.marqueeSpan}>
                <Image
                  src='/img/logos/CRH_Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} `}
                />
                <Image
                  src='/img/logos/CRH_Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} `}
                />
                <Image
                  src='/img/logos/CRH_Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} `}
                />
                <Image
                  src='/img/logos/CRH_Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} `}
                />
                <Image
                  src='/img/logos/CRH_Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} `}
                />
                <Image
                  src='/img/logos/CRH_Logo.svg'
                  alt='Placeholder Image'
                  width={64}
                  height={73}
                  className={`${styles.logo} `}
                />
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingLogos;
