import React, { useRef, useEffect } from 'react';

interface AutoPlayVideoProps {
  videoSrc: string;
  videoWidth?: string;
  className?: string;
}

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({
  videoSrc,
  videoWidth = '100%',
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        width={videoWidth}
        className={className}
        muted
        controls
        style={{ display: 'block' }}
      >
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoPlayVideo;
