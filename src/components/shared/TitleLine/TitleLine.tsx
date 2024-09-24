import React, { useState, useEffect } from 'react';
import GrowLine from '@shared/GrowLine/GrowLine';

interface TitleLineProps {
  title: string;
  description: string;
  lineClass?: string;
  aosDelay?: string;
  aosDuration?: string;
}

const TitleLine: React.FC<TitleLineProps> = ({ title, description }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='sticky-side'>
      <div className='title-line-container'>
        <div className='grow-line-box'>
          <GrowLine aosDelay='500' aosDuration='1500' />
        </div>
        <div className='box-side'>
          <p className='h3'>{title}</p>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default TitleLine;
