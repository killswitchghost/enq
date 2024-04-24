// useUnderlineWrapper.tsx

import { useEffect, useRef } from 'react';

const useUnderlineWrapper = () => {
  // Change to HTMLDivElement to match the div element
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const underlineElements = containerRef.current.querySelectorAll('.underline');

      underlineElements.forEach((el) => {
        if (!el.querySelector('span')) {
          const span = document.createElement('span');
          span.textContent = el.textContent; // Transfer the text content to the span
          el.textContent = ''; // Clear the element's text content
          el.appendChild(span); // Add the span back into the element
        }
      });
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return containerRef;
};

export default useUnderlineWrapper;
