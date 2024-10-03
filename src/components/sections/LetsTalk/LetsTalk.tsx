import React from 'react';
import Link from 'next/link';
import styles from './_LetsTalk.module.scss';

const NextSteps: React.FC = () => {
  return (
    <section id='letstalk' className={`${styles.letsTalkSection} section-py`}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 d-flex'>
            <div className='flex-column'>
              <h2 className='display-4 mb-4'>
                <span
                  data-aos='fade-up'
                  data-aos-delay='50'
                  data-aos-duration='1000'
                >
                  Let&apos;s{' '}
                </span>
                <span
                  className='grad-1'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1000'
                >
                  Dream.{' '}
                </span>
                <span
                  className='grad-2'
                  data-aos='fade-up'
                  data-aos-delay='150'
                  data-aos-duration='1000'
                >
                  Build.
                </span>
                <span
                  className='grad-3'
                  data-aos='fade-up'
                  data-aos-delay='200'
                  data-aos-duration='1000'
                >
                  Grow.
                </span>
                <br />
                <span
                  data-aos='fade-up'
                  data-aos-delay='250'
                  data-aos-duration='1000'
                >
                  Bring your digital vision to life.
                </span>
              </h2>
              <p
                className='me-5'
                data-aos='fade-in'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                Ready to bring your vision to life? Connect with our team today
                to start your project. We&apos;re here to turn your ideas into
                reality.
              </p>
              <p
                className='h1 me-5'
                data-aos='fade-in'
                data-aos-delay='350'
                data-aos-duration='1000'
              >
                <Link href='#' className='button-arrow underline fw-light'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    viewBox='0 0 6 9'
                    className='arrow-icon me-2'
                  >
                    <g
                      id='Layer_1-2'
                      className='arrow-head'
                      data-name='Layer_1'
                    >
                      <polyline
                        points='1.1 .8 4.9 4.5 1.1 8.2'
                        fill='none'
                        stroke='#000'
                        stroke-linejoin='round'
                        stroke-width='.8'
                      />
                    </g>
                    <g className='arrow-body'>
                      <path
                        d='M3.5,4.5H0'
                        fill='none'
                        stroke='#000'
                        stroke-width='.8'
                      />
                    </g>
                  </svg>
                  <span>Let&apos;s Talk!</span>
                </Link>
              </p>
            </div>
          </div>
          <div className='col-lg-4 text-right'>
            <div className='d-flex flex-column'>
              <ul className='list-links'>
                <li>
                  <Link href='#'>
                    Work Together
                    <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    Join our team <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    Just say hello <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    Get our newsletter <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
