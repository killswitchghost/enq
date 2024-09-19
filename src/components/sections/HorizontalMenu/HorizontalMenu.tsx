import React, { useEffect } from 'react';
import './_HorizontalMenu.module.scss';

type MenuItem = {
  title: string;
  href: string;
};

type HorizontalMenuProps = {
  menuItems: MenuItem[];
};

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ menuItems }) => {
  const onScroll = () => {
    const scrollPos = window.pageYOffset;
    const links = document.querySelectorAll('#menu-center a');

    links.forEach((link) => {
      const href = link.getAttribute('href');
      const refElement = href ? document.querySelector(href) : null;

      if (refElement && refElement instanceof HTMLElement) {
        const isActive =
          refElement.offsetTop <= scrollPos &&
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
    <div className='dropdown horizontal-menu'>
      <button
        className='dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Explore this section <i className='bi bi-chevron-down'></i>
      </button>
      <nav id='menu-center'>
        <ul className='dropdown-menu'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className='dropdown-item'
              >
                <span className='underline'>
                  <span>{item.title}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HorizontalMenu;
