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

  // Define a set of 9 colors
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

  // Function to get a random color from the array
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Function to get a random size between minSize and maxSize
  const getRandomSize = () => {
    return Math.random() * (maxSize - minSize) + minSize;
  };

  const updateSparklePosition = () => {
    const newLeft = `${Math.random() * 100}vw`; // Randomize position relative to viewport width
    const newTop = `${Math.random() * 100}vh`; // Randomize position relative to viewport height
    setStyle((prevStyle) => ({
      ...prevStyle,
      left: newLeft,
      top: newTop
    }));
  };

  useEffect(() => {
    const randomSize = getRandomSize(); // Get random size
    const duration = Math.random() * 2000 + 1000; // Increase duration between 5000ms and 13000ms for slower appearance
    const delay = Math.random() * 6000 + 1000; // Add random delay between 2000ms and 6000ms

    setStyle({
      position: 'fixed', // Positioned relative to the viewport
      width: `${randomSize}px`, // Use random size
      height: `${randomSize}px`, // Use random size
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
      fill={getRandomColor()} // Use the random color here
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
