import { useState, useEffect } from 'react';

const useWindowWidth = (): boolean => {

  const [isWide, setIsWide] = useState<boolean>(false);

  useEffect(() => {

    const checkIsWide = () => setIsWide(window.innerWidth >= 992);


    checkIsWide();


    window.addEventListener('resize', checkIsWide);


    return () => window.removeEventListener('resize', checkIsWide);
  }, []);

  return isWide;
};

export default useWindowWidth;
