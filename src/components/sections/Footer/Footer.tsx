import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '@shared/ThemeToggle/ThemeToggle';
import styles from './_Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.footerSection}`}>
      <div className='container'>
        <div className={`${styles.footerBottomRow} row`}>
          <div className='col-lg-3 mb-4'>
            <p className='mb-2'>
              {' '}
              © {new Date().getFullYear()} Enqbator. All Rights Reserved.
            </p>
            <Link href='#' className='underline'>
              <span>Privacy Policy</span>
            </Link>{' '}
            |{' '}
            <Link href='#' className='underline'>
              <span>Terms of Use</span>
            </Link>
          </div>
          <div className='col-lg-3 mb-4'>
            <p className='mb-2'>Preferences </p> <ThemeToggle />
          </div>
          <div className='col-lg-3 mb-4'>
            <p className='mb-2'>Language</p>
            <button className='btn btn-sm btn-primary'>US - English</button>
          </div>
          <div className='col-lg-3 mb-4'>
            <p className='mb-2'>Stalk us on</p>
            <div className={styles.footerSocialLinks}>
              <Link href='#' className={`${styles.footerSocialLink} btn`}>
                <Image
                  src='/img/social/linkedin.svg'
                  width={24}
                  height={24}
                  alt='LinkedIn'
                  className={styles.socialIcon}
                />
              </Link>
              <Link href='#' className={`${styles.footerSocialLink} btn`}>
                <Image
                  src='/img/social/twitter.svg'
                  width={24}
                  height={24}
                  alt='LinkedIn'
                  className={styles.socialIcon}
                />
              </Link>

              <Link href='#' className={`${styles.footerSocialLink} btn`}>
                <Image
                  src='/img/social/instagram.svg'
                  width={24}
                  height={24}
                  alt='LinkedIn'
                  className={styles.socialIcon}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
