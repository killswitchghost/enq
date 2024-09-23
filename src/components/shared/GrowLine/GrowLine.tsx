import styles from './_GrowLine.module.scss';

import React, { useState, useEffect } from 'react';

interface GrowLineProps {
  lineClass?: string;
  aosDelay?: string;
  aosDuration?: string;
  alignmentClass?: string;
}

const gradientClasses = [
  'grad-vert-purple-blue',
  'grad-vert-lime-yellow',
  'grad-vert-lime-green',
  'grad-vert-pink-green',
  'grad-vert-red-yellow',
  'grad-vert-pink-lime',
  'grad-vert-blue-yellow',
  'grad-vert-purple-sky',
  'grad-vert-purple-red',
  'grad-vert-green-blue'
];

const GrowLine: React.FC<GrowLineProps> = ({
  lineClass,
  aosDelay = '0',
  aosDuration = '1000',
  alignmentClass = ''
}) => {
  const [randomLineClass, setRandomLineClass] = useState(lineClass || '');

  useEffect(() => {
    if (!lineClass) {
      const randomClass =
        gradientClasses[Math.floor(Math.random() * gradientClasses.length)];
      setRandomLineClass(randomClass);
    }
  }, [lineClass]);

  return (
    <div
      className={`grow-line ${randomLineClass} ${alignmentClass}`}
      data-aos='grow-animation'
      data-aos-delay={aosDelay}
      data-aos-duration={aosDuration}
    />
  );
};

export default GrowLine;
