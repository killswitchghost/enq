import React, { useEffect, useState, useRef } from 'react';

interface SparkleProps {
  minSize?: number;
  maxSize?: number;
  className?: string;
}

const Sparkle: React.FC<SparkleProps> = ({
  minSize = 10,
  maxSize = 20,
  className = 'default-star'
}) => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const sparkleRef = useRef<SVGSVGElement>(null);

  const colors = [
    '#ff5733',
    '#33ff57',
    '#3357ff',
    '#f333ff',
    '#ffb733',
    '#33ffb7',
    '#ff3357',
    '#b733ff',
    '#57ff33'
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const updateSparklePosition = () => {
    const newLeft = `${Math.random() * 100}vw`;
    const newTop = `${Math.random() * 100}vh`;
    setStyle((prevStyle) => ({
      ...prevStyle,
      left: newLeft,
      top: newTop
    }));
  };

  useEffect(() => {
    const getRandomSize = () => {
      return Math.random() * (maxSize - minSize) + minSize;
    };

    const randomSize = getRandomSize();
    const duration = Math.random() * 2000 + 1000;
    const delay = Math.random() * 6000 + 1000;

    setStyle({
      position: 'fixed',
      width: `${randomSize}px`,
      height: `${randomSize}px`,
      zIndex: -1,
      animation: `spin ${duration}ms linear infinite, fadeInOutSoft ${duration}ms ease-in-out ${delay}ms infinite`,
      transformOrigin: 'center'
    });

    const sparkleElement = sparkleRef.current;
    const handleAnimationIteration = () => {
      updateSparklePosition();
    };

    if (sparkleElement) {
      sparkleElement.addEventListener(
        'animationiteration',
        handleAnimationIteration
      );
    }

    updateSparklePosition();

    return () => {
      if (sparkleElement) {
        sparkleElement.removeEventListener(
          'animationiteration',
          handleAnimationIteration
        );
      }
    };
  }, [minSize, maxSize]);

  return (
    <svg
      ref={sparkleRef}
      className={`my-sparkle ${className}`}
      style={style}
      viewBox='0 0 512 512'
      fill={getRandomColor()}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M256,40l12.7,159.2c1.9,23.5,20.5,42.1,44,44L472,256l-159.2,12.7c-23.5,1.9-42.1,20.5-44,44L256,472l-12.7-159.2
                                    	c-1.9-23.5-20.5-42.1-44-44L40,256l159.2-12.7c23.5-1.9,42.1-20.5,44-44L256,40z'
      />
    </svg>
  );
};

interface SparkleContainerProps {
  amount?: number;
}

const SparkleContainer: React.FC<SparkleContainerProps> = ({ amount = 1 }) => {
  return (
    <>
      {Array.from({ length: amount }).map((_, index) => (
        <Sparkle key={index} />
      ))}
    </>
  );
};

export default SparkleContainer;
