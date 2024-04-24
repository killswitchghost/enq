import React, { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/scss/style.scss';


import NavHeader from '@/src/components/sections/NavHeader/NavHeader';
import Footer from '@/src/components/sections/Footer/Footer';

import Test from '@components/Test';

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
         {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        /> */}

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



