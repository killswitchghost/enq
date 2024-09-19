import React from 'react';
import styles from './_CircleArrow.module.scss'; // Import styles

interface CircleArrowProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string; // Allow passing a className
}

const CircleArrow: React.FC<CircleArrowProps> = ({
  width = 262, // Default width
  height = 262, // Default height
  strokeColor = 'black', // Default stroke color
  strokeWidth = 24, // Default stroke width
  className = '' // Allow an additional class to be passed
}) => {
  return (
    <span className={`${styles.circleIcon} ${className} circle-arrow`}>
      <svg
        width={width}
        height={height}
        viewBox='0 0 262 262'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`${styles.svgArrow} svg-arrow`}
      >
        <path
          d='M251 131L11 131'
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`${styles.svgStem} svg-stem`}
        />
        <path
          d='M129.45 11L251 131L129.45 251'
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`${styles.svgCaret} svg-caret`}
        />
      </svg>
    </span>
  );
};

export default CircleArrow;
