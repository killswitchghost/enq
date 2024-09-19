import React, { useEffect } from 'react';

const SubNav: React.FC = () => {
  const onScroll = () => {
    const scrollPos = window.pageYOffset;
    const links = document.querySelectorAll('#menu-center a');

    links.forEach((link) => {
      const refElement = document.querySelector(
        link.getAttribute('href') as string
      ) as HTMLElement;
      if (refElement) {
        if (
          refElement.offsetTop <= scrollPos &&
          refElement.offsetTop + refElement.clientHeight > scrollPos
        ) {
          document.querySelectorAll('#menu-center ul li a').forEach((el) => {
            el.classList.remove('active');
          });
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    anchor: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(anchor) as HTMLElement | null;
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav id='menu-center'>
      <ul>
        <li>
          <a href='#section1' onClick={(e) => handleClick(e, '#section1')}>
            Section 1
          </a>
        </li>
        <li>
          <a href='#section2' onClick={(e) => handleClick(e, '#section2')}>
            Section 2
          </a>
        </li>
        <li>
          <a href='#section3' onClick={(e) => handleClick(e, '#section3')}>
            Section 3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SubNav;
