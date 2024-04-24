import React from 'react';
import './_GrowLine.scss';



interface GrowLineProps {
  className?: string;
}
const GrowLine: React.FC<GrowLineProps> = ({ className = '' }) => {
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
