import React, { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/scss/style.scss';


import NavHeader from '@/src/components/sections/NavHeader/NavHeader';
import Footer from '@/src/components/sections/Footer/Footer';


import BackTop from '../shared/BackTop/BackTop';
import Cursor from '@/src/components/shared/Cursor/Cursor';

import Lenis from '../shared/Lenis/Lenis';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  useEffect(() => {
    AOS.init({
      initClassName: 'aos-init',
      easing: 'ease-out-quart',
      once: false,
      mirror: true,
    });
  }, []);

  return (

<div>

      <NavHeader />
      <div className="content-wrapper">

        {children}

      </div>
      <Footer />
      <BackTop />

 <Cursor />
</div>



  );
};

export default Layout;



