import React from 'react';
import styles from './_CustomizeExperience.module.scss';

const CustomizeExp = () => {
  return (
    <section className={`${styles.customizeSection}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='customize-menu'>
              Optional? Customize your experience{' '}
              <a href='#' className='underline m-2 active'>
                <span className='underline'>
                  <span>All</span>
                </span>
              </a>
              <a href='#' className='underline m-2'>
                <span className='underline'>
                  <span>Healthcare</span>
                </span>
              </a>
              <a href='#' className='underline m-2'>
                <span className='underline'>
                  <span>Non-Profit</span>
                </span>
              </a>
              <a href='#' className='underline m-2'>
                <span className='underline'>
                  <span>Education</span>
                </span>
              </a>
              <a href='components' className='underline m-2'>
                <span className='underline'>
                  <span>Sample</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeExp;
