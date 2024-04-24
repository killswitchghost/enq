import React from 'react';
import './_GrowLine.scss';
import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Initialize AOS
// AOS.init();

interface GrowLineProps {
  className?: string;
}
const GrowLine: React.FC<GrowLineProps> = ({ className = '' }) => {
  // Combine the grow-div class with any additional classes passed via props
  const combinedClassName = `grow-div ${className || ''}`.trim();

  return (
    <div
      className={combinedClassName}
      data-aos="grow-animation"
      data-aos-delay="10"
      data-aos-duration="1000"
    />
  );
};

export default GrowLine;
