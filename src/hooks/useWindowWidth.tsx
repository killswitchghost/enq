import { useState, useEffect } from 'react';

const useWindowWidth = (): boolean => {
  // Initialize state without accessing `window` object
  const [isWide, setIsWide] = useState<boolean>(false);

  useEffect(() => {
    // Define a function to update the state based on the current `window.innerWidth`
    const checkIsWide = () => setIsWide(window.innerWidth >= 992);

    // Call the function once to set the initial state correctly client-side
    checkIsWide();

    // Set up an event listener for window resize to update the state as needed
    window.addEventListener('resize', checkIsWide);

    // Clean up the event listener when the component unmounts or rerenders
    return () => window.removeEventListener('resize', checkIsWide);
  }, []);

  return isWide;
};

export default useWindowWidth;
