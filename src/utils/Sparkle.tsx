import React, { useEffect, useState, useRef } from 'react';

interface SparkleProps {
  fill?: string;
  size?: number;
  className?: string;
}

const Sparkle: React.FC<SparkleProps> = ({
  fill = "#fff",
  size = 20,
  className = "default-star"
}) => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const sparkleRef = useRef<SVGSVGElement>(null);

  const updateSparklePosition = () => {
    const newLeft = `${Math.random() * 100}%`;
    const newTop = `${Math.random() * 100}%`;
    setStyle((prevStyle) => ({
      ...prevStyle,
      left: newLeft,
      top: newTop,
    }));
  };

  useEffect(() => {
    const duration = Math.random() * 3000 + 2000;
    const delay = Math.random() * 1000;

    setStyle({
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      zIndex: 9999,
      animation: `spin ${duration}ms linear infinite, fadeInOut ${duration}ms ease-in-out ${delay}ms infinite`,
      transformOrigin: 'center',

    });


    const sparkleElement = sparkleRef.current;
    const handleAnimationIteration = () => {
      updateSparklePosition();
    };

    if (sparkleElement) {
      sparkleElement.addEventListener('animationiteration', handleAnimationIteration);
    }


    updateSparklePosition();


    return () => {
      if (sparkleElement) {
        sparkleElement.removeEventListener('animationiteration', handleAnimationIteration);
      }
    };
  }, [size]);

  return (
    <svg
      ref={sparkleRef}
      className={`my-sparkle ${className}`}
      style={style}
      viewBox="0 0 512 512"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
                                <path d="M256,40l12.7,159.2c1.9,23.5,20.5,42.1,44,44L472,256l-159.2,12.7c-23.5,1.9-42.1,20.5-44,44L256,472l-12.7-159.2
                                    	c-1.9-23.5-20.5-42.1-44-44L40,256l159.2-12.7c23.5-1.9,42.1-20.5,44-44L256,40z" />
    </svg>
  );
};

export default Sparkle;
