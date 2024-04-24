import { useEffect } from 'react';

const useSmoothAnchorScroll = () => {
  useEffect(() => {
    const handleClick = (event: Event) => {
      event.preventDefault();

      const target = event.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const id = href.slice(1);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
};

export default useSmoothAnchorScroll;