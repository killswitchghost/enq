

import { useEffect, useRef } from 'react';

const useUnderlineWrapper = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const underlineElements = containerRef.current.querySelectorAll('.underline');

      underlineElements.forEach((el) => {
        if (!el.querySelector('span')) {
          const span = document.createElement('span');
          span.textContent = el.textContent;
          el.textContent = '';
          el.appendChild(span);
        }
      });
    }
  }, []);

  return containerRef;
};

export default useUnderlineWrapper;
