import React, { useRef, useEffect, useState } from 'react';

interface VideoScrubProps {
  videoSrc: string;
  videoWidth?: string;
  className?: string; // Make className optional in case it's not passed
}

interface LenisScrollEvent {
  scroll: number;
}

const throttle = (func: (...args: any[]) => void, limit: number) => {
  let inThrottle: boolean;
  return (...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const VideoScrub: React.FC<VideoScrubProps> = ({
  videoSrc,
  videoWidth = '100%',
  className = '' // Default to empty string if no className is passed
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const lenis = (window as any).lenis;

    if (!lenis) {
      console.error('Lenis instance not found');
      return;
    }

    const handleScroll = throttle(({ scroll }: LenisScrollEvent) => {
      if (videoRef.current && videoDuration > 0) {
        const scrollPosition = scroll;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollPosition / scrollHeight;
        const videoTime = scrollFraction * videoDuration;
        videoRef.current.currentTime = videoTime;
      }
    }, 100);

    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [videoDuration]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width={videoWidth}
        preload='auto'
        muted
        onLoadedMetadata={handleLoadedMetadata}
        className={className} // Add the className dynamically
        style={{
          position: 'sticky',
          top: 0,
          objectFit: 'cover',
          maxHeight: '100vh'
        }}
      >
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoScrub;
