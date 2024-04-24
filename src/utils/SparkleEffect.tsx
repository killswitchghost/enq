import React, { useEffect, useState } from 'react';

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
  // Use state to track individual sparkle's position & animation properties
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    // Function to update sparkle's position and animation properties
    const updateSparkle = () => {
      const duration = Math.random() * 3000 + 2000; // Duration between 2s and 5s
      const delay = Math.random() * 1000; // Delay up to 1s
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;

      setStyle({
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 9999,
        left,
        top,
        animation: `spin ${duration}ms linear infinite, fadeInOut ${duration}ms ease-in-out ${delay}ms infinite`,
        transformOrigin: 'center',
        opacity: 0, // Initial opacity can be set to 0 if fadeInOut animation handles showing the sparkle
      });
    };

    updateSparkle(); // Initialize sparkle position & animation

    // Optional: Update sparkle's position & animation at intervals
    // const intervalId = setInterval(updateSparkle, duration + delay + 1000);
    // return () => clearInterval(intervalId);
  }, [size]); // Re-run effect if 'size' prop changes

  return (
    <svg className={`my-sparkle ${className}`} style={style} viewBox="0 0 512 512" fill={fill} xmlns="http://www.w3.org/2000/svg">
                                <path d="M256,40l12.7,159.2c1.9,23.5,20.5,42.1,44,44L472,256l-159.2,12.7c-23.5,1.9-42.1,20.5-44,44L256,472l-12.7-159.2
                                    	c-1.9-23.5-20.5-42.1-44-44L40,256l159.2-12.7c23.5-1.9,42.1-20.5,44-44L256,40z" />
    </svg>
  );
};

export default Sparkle;
