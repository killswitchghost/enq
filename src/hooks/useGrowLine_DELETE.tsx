import { useEffect } from 'react';

const useGrowLine = () => {
  useEffect(() => {
    const growLineOnScroll = () => {
      const growDivs = document.querySelectorAll('.grow-div .line');

      growDivs.forEach((element) => {
        const growDiv = element as HTMLElement; // Ensuring the element is treated as an HTMLElement
        const windowHeight = window.innerHeight;
        const divPosition = growDiv.getBoundingClientRect();
        const percentageVisible = (windowHeight - divPosition.top) / windowHeight;
        const newHeight = `${Math.min(percentageVisible * 180, 300)}px`;

        growDiv.style.height = newHeight;

        if (newHeight === '180px') {
          console.log('Height is now 180px.');
        }
      });
    };

    window.addEventListener('scroll', growLineOnScroll);

    return () => window.removeEventListener('scroll', growLineOnScroll);
  }, []);
};

export default useGrowLine;
