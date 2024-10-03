import React from 'react';
import styles from './_ArrowIcon.module.scss';

const ArrowIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    viewBox='0 0 6 9'
    className='arrow-icon me-2'
  >
    <g id='Layer_1-2' className='arrow-head' data-name='Layer_1'>
      <polyline
        points='1.1 .8 4.9 4.5 1.1 8.2'
        fill='none'
        stroke='#000'
        strokeLinejoin='round'
        strokeWidth='.8'
      />
    </g>
    <g className='arrow-body'>
      <path d='M3.5,4.5H0' fill='none' stroke='#000' strokeWidth='.8' />
    </g>
  </svg>
);

export default ArrowIcon;
