import React, { useEffect } from 'react';
import './_HorizontalMenu.scss';

const HorizontalMenu: React.FC = () => {
  const onScroll = () => {
    const scrollPos = window.pageYOffset;
    const links = document.querySelectorAll('#menu-center a');

    links.forEach((link) => {
      const href = link.getAttribute('href');
      const refElement = href ? document.querySelector(href) : null;

      if (refElement && refElement instanceof HTMLElement) {
        const isActive = refElement.offsetTop <= scrollPos &&
          refElement.offsetTop + refElement.clientHeight > scrollPos;

        if (isActive) {
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
    onScroll();
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, anchor: string) => {
    e.preventDefault();
    const target = document.querySelector(anchor) as HTMLElement | null;
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="dropdown horizontal-menu">
      <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Explore this section <i className="bi bi-chevron-down"></i>
      </button>
      <nav id="menu-center">
        <ul className="dropdown-menu">
          <li><a href="#section1" onClick={(e) => handleClick(e, '#section1')} className="dropdown-item"><span className="underline"><span>Section 1</span></span></a></li>
          <li><a href="#section2" onClick={(e) => handleClick(e, '#section2')} className="dropdown-item"><span className="underline"><span>Section 2</span></span></a></li>
          <li><a href="#section3" onClick={(e) => handleClick(e, '#section3')} className="dropdown-item"><span className="underline"><span>Section 3</span></span></a></li>
          {/* Add more nav items here */}
        </ul>
      </nav>
    </div>
  );
};

export default HorizontalMenu;
