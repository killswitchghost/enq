import React, { useState, useEffect } from 'react';

interface TitleLineProps {
  title: string;
  description: string; // This will now support HTML content
  lineClass?: string; // To allow customization of line color (e.g., grad-vert-pink-green)
  aosDelay?: string; // Optional AOS delay, default to "0"
  aosDuration?: string; // Optional AOS duration, default to "1000"
}

const TitleLine: React.FC<TitleLineProps> = ({
  title,
  description,
  lineClass = 'grad-vert-pink-green', // default class for the grow line
  aosDelay = '0',
  aosDuration = '1000'
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Wait until the component is mounted on the client
  }, []);

  if (!isMounted) {
    // Avoid rendering until mounted to avoid SSR mismatch
    return null;
  }

  return (
    <div className='sticky-side'>
      <div className='title-line-container'>
        <div className='grow-line-box'>
          <div
            className={`grow-line ${lineClass}`}
            data-aos='grow-animation'
            data-aos-delay={aosDelay}
            data-aos-duration={aosDuration}
          />
        </div>
        <div className='box-side'>
          <p className='h3'>{title}</p>
          {/* Use dangerouslySetInnerHTML to render HTML */}
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default TitleLine;
