import React from 'react';
//import Section from '../../layouts/Section/Section';
import CircleArrow from '@shared/CircleArrow/CircleArrow';
import styles from './_Contacts.module.scss'; // Import styles

const Contacts = () => {
  return (
    <section className={`${styles.contactsSection}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-3'>
            <a
              href='#'
              className={`card my-3 ${styles.cardContact}`}
              data-aos='fade'
              data-aos-duration='1000'
              data-aos-delay='200'
            >
              <div className={styles.cardTitle}>
                <h4 className='underline'>
                  <span>Got a project in mind, Let&apos;s talk</span>
                </h4>
              </div>
              <CircleArrow
                width={150}
                height={150}
                strokeColor='red'
                strokeWidth={16}
                className={styles.circleArrow}
              />
            </a>
          </div>
          <div className='col-md-6 col-lg-3'>
            <a
              href='#'
              className={`card my-3 ${styles.cardContact}`}
              data-aos='fade'
              data-aos-duration='1000'
              data-aos-delay='400'
            >
              <div className={styles.cardTitle}>
                <h4 className='underline'>
                  <span>General Inquiries</span>
                </h4>
              </div>
              <CircleArrow
                width={150}
                height={150}
                strokeColor='red'
                strokeWidth={16}
                className={styles.circleArrow}
              />
            </a>
          </div>
          <div className='col-md-6 col-lg-3'>
            <a
              href='#'
              className={`card my-3 ${styles.cardContact}`}
              data-aos='fade'
              data-aos-duration='1000'
              data-aos-delay='600'
            >
              <div className={styles.cardTitle}>
                <h4 className='underline'>
                  <span>Career Opportunities</span>
                </h4>
              </div>
              <CircleArrow
                width={150}
                height={150}
                strokeColor='red'
                strokeWidth={16}
                className={styles.circleArrow}
              />
            </a>
          </div>
          <div className='col-md-6 col-lg-3'>
            <a
              href='#'
              className={`card my-3 ${styles.cardContact}`}
              data-aos='fade'
              data-aos-duration='1000'
              data-aos-delay='800'
            >
              <div className={styles.cardTitle}>
                <h4 className='underline'>
                  <span>Sign up for our newsletter</span>
                </h4>
              </div>
              <CircleArrow
                width={150}
                height={150}
                strokeColor='red'
                strokeWidth={16}
                className={styles.circleArrow}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
